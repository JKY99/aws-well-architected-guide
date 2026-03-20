import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP06 — 공유 파일 시스템 또는 스토리지로 공통 데이터 접근</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>

      <p>
        공유 파일 시스템 또는 스토리지를 도입하여 데이터 중복을 방지하고
        워크로드의 인프라 효율성을 높입니다. 여러 소비자가 동일한 데이터셋에 접근하는 경우
        공유 스토리지를 사용하면 데이터를 복사하지 않고도 공유할 수 있어
        워크로드에 필요한 스토리지 리소스를 줄일 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        공유 스토리지 기술을 통해 데이터를 중앙에서 관리하고 여러 소비자가 동일한 데이터셋을
        효율적으로 공유합니다. 데이터 중복이 제거되어 스토리지 리소스 사용량과
        관련 에너지 소비가 최소화됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 개별 클라이언트에 독립적인 스토리지를 프로비저닝하는 경우</li>
        <li>비활성 클라이언트에서 데이터 볼륨을 분리하지 않는 경우</li>
        <li>플랫폼과 시스템 전반에 걸친 스토리지 공유 접근을 제공하지 않는 경우</li>
        <li>공유 가능한 데이터를 각 인스턴스에 개별 복사하여 저장하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>공유 스토리지로 데이터 중복을 제거하여 스토리지 리소스 요구사항 감소</li>
        <li>여러 컴퓨팅 리소스가 동시에 데이터를 병렬 처리하는 효율성 향상</li>
        <li>시스템 전반에 걸친 데이터 일관성 보장</li>
        <li>데이터 복제 및 동기화에 필요한 네트워크 트래픽 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>여러 소비자가 동일한 데이터셋에 접근하는 경우 공유 스토리지로 데이터를 마이그레이션합니다.</li>
        <li>같은 가용 영역 내 여러 인스턴스가 고성능 블록 스토리지를 공유해야 하는 경우 Amazon EBS Multi-Attach(io1/io2)를 사용합니다.</li>
        <li>여러 인스턴스에서 NFS 기반 공유 파일 시스템이 필요한 경우 Amazon EFS를 사용합니다.</li>
        <li>Windows 파일 시스템 공유나 고성능 HPC 워크로드에는 Amazon FSx를 활용합니다.</li>
        <li>파일 시스템 구조가 필요 없는 애플리케이션은 Amazon S3를 공유 객체 스토리지로 사용합니다.</li>
        <li>공유 파일 시스템에서 필요한 데이터만 가져오고, 비활성 클라이언트에서 볼륨을 분리합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EFS — 여러 EC2 인스턴스가 공유하는 완전 관리형 NFS 파일 시스템</li>
        <li>Amazon EBS Multi-Attach — 동일 가용 영역 내 여러 인스턴스에 단일 볼륨 연결</li>
        <li>Amazon FSx — 고성능 및 Windows 환경의 공유 파일 시스템</li>
        <li>Amazon S3 — 무제한 확장 가능한 공유 객체 스토리지</li>
        <li>Amazon FSx for Lustre — S3 연동 고성능 컴퓨팅용 공유 파일 시스템</li>
      </ul>

      <PageNav />
    </article>
  );
}
