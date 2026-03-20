import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP06 — 공유 파일 시스템 또는 스토리지로 공통 데이터 접근</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        공유 파일 시스템이나 스토리지를 도입하여 데이터 중복을 피하고 워크로드의 인프라 효율성을 높입니다.
        여러 사용자나 애플리케이션이 데이터를 복제하지 않고도 동일한 데이터셋에 접근할 수 있도록
        중앙 집중화된 스토리지 솔루션을 활용합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드에 필요한 스토리지 리소스를 줄이고 여러 컴퓨팅 리소스가 데이터에 병렬로 접근하고
        처리할 수 있습니다. 다양한 시스템 전반에 걸쳐 데이터 일관성을 유지하고 공유 스토리지 기술을 통해
        인프라 효율성을 최적화합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 개별 클라이언트에 독립적인 스토리지를 프로비저닝하는 경우</li>
        <li>비활성 클라이언트에서 데이터 볼륨을 분리하지 않는 경우</li>
        <li>플랫폼과 시스템 전반에 걸친 스토리지 공유 접근을 제공하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터를 여러 위치에 복사하지 않고 공유</li>
        <li>중복 제거를 통한 스토리지 리소스 감소</li>
        <li>시스템 전반의 데이터 일관성 유지</li>
        <li>병렬 처리 기능을 통한 효율적인 컴퓨팅 활용</li>
        <li>데이터셋의 중앙 집중식 관리</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>여러 소비자가 동일한 데이터셋에 접근하는 경우 공유 스토리지로 데이터를 마이그레이션합니다.</li>
        <li>Amazon FSx for Lustre(S3 연동)를 활용하여 필요한 데이터 서브셋만 가져옵니다.</li>
        <li>데이터 수명 주기 관리 정책(SUS04-BP03)을 따라 불필요한 데이터를 삭제합니다.</li>
        <li>비활성 클라이언트에서 볼륨을 분리합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EBS Multi-Attach — 동일 가용 영역 내 여러 인스턴스에 단일 Provisioned IOPS SSD(io1/io2) 연결</li>
        <li>Amazon EFS — 리소스 전반에 걸친 공유 액세스를 위한 탄력적 파일 시스템</li>
        <li>Amazon FSx — 완전 관리형 파일 시스템(Windows, Lustre, NetApp, OpenZFS)</li>
        <li>Amazon S3 — 파일 시스템 구조가 필요 없는 애플리케이션을 위한 대용량 확장 가능 객체 스토리지</li>
      </ul>

      <PageNav />
    </article>
  );
}
