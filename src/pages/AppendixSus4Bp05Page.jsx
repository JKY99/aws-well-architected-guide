import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP05 — 불필요하거나 중복된 데이터 제거</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        불필요하거나 중복된 데이터를 제거하여 데이터셋을 저장하는 데 필요한 스토리지 리소스를
        최소화합니다. 불필요하고 중복된 데이터셋을 제거하면 스토리지 비용과 환경 발자국을 줄일 수 있습니다.
        또한 컴퓨팅 리소스가 불필요한 데이터 대신 중요한 데이터만 처리하므로 컴퓨팅이 더 효율적일 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드에 필요한 스토리지 크기를 줄이고 워크로드의 환경적 영향을 최소화합니다.
        스토리지 비용을 절감하고 중요한 데이터만 처리하여 컴퓨팅 효율성을 개선합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>쉽게 얻거나 재생성할 수 있는 데이터를 복제하는 경우</li>
        <li>중요도를 고려하지 않고 모든 데이터를 백업하는 경우</li>
        <li>데이터를 비정기적으로만 삭제하거나 전혀 삭제하지 않는 경우</li>
        <li>스토리지 서비스의 내구성과 관계없이 중복으로 데이터를 저장하는 경우</li>
        <li>비즈니스 정당성 없이 Amazon S3 버전 관리를 활성화하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>스토리지 비용 및 환경 발자국 감소</li>
        <li>중요한 데이터만 처리하여 컴퓨팅 효율성 향상</li>
        <li>전반적인 워크로드 성능 최적화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Data Exchange와 Open Data on AWS를 활용하여 이미 존재하는 데이터를 저장하지 않습니다.</li>
        <li>Amazon S3는 AWS Lake Formation FindMatches, Amazon FSx는 데이터 중복 제거, Amazon EBS 스냅샷은 증분 백업을 활용하여 데이터를 중복 제거합니다.</li>
        <li>Amazon DynamoDB TTL, Amazon S3 Lifecycle 정책, Amazon CloudWatch 로그 보존 등 수명 주기 정책을 사용합니다.</li>
        <li>Amazon Redshift Data Sharing으로 데이터 가상화를 구현하여 복제 없이 소스에서 데이터를 유지합니다.</li>
        <li>증분 백업 기술을 구현하여 변경된 데이터만 백업합니다.</li>
        <li>Amazon S3의 기본 내구성, Amazon EBS 복제 등 스토리지 서비스 내장 내구성을 활용하여 자가 관리 중복성(RAID)을 피합니다.</li>
        <li>오래된 버전 자산을 객체 스토어 및 엣지 캐시에서 제거합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 — Lifecycle 정책, 버전 관리 관리</li>
        <li>Amazon FSx — 윈도우 및 ONTAP용 데이터 중복 제거</li>
        <li>Amazon DynamoDB — Time To Live(TTL)</li>
        <li>Amazon EBS — 증분 스냅샷</li>
        <li>Amazon Redshift — 데이터 공유</li>
        <li>AWS Lake Formation — 중복 탐지</li>
        <li>Amazon CloudWatch Logs — 로그 보존</li>
        <li>AWS Backup — 백업 및 복구 자동화</li>
      </ul>

      <PageNav />
    </article>
  );
}
