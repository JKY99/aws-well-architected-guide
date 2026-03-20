import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SUS02-BP03 — 미사용 자산의 생성 및 유지 관리 중단</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮은 수준입니다.</p>
      </div>

      <p>
        워크로드의 미사용 자산을 폐기하여 수요를 지원하는 데 필요한 클라우드 리소스 수를 줄이고
        낭비를 최소화합니다. 미사용 자산은 스토리지 공간, 컴퓨팅 파워와 같은 클라우드 리소스를
        소비합니다. 이러한 자산을 식별하고 제거하면 리소스를 확보하여 더 효율적인 클라우드 아키텍처를
        구축할 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        수요를 지원하는 데 필요한 클라우드 리소스 수를 줄이고 리소스 낭비를 최소화합니다.
        리소스를 확보하고 워크로드의 전반적인 효율성을 개선합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>더 이상 필요하지 않은 중복 자산을 애플리케이션에서 분석하지 않는 경우</li>
        <li>중복되거나 더 이상 필요하지 않은 자산을 제거하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>미사용 자산 제거로 리소스 확보</li>
        <li>워크로드의 전반적인 효율성 향상</li>
        <li>리소스 소비 및 환경적 영향 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 내 모든 자산에 대한 인벤토리를 수행합니다.</li>
        <li>지속적인 모니터링을 통해 더 이상 필요하지 않은 정적 자산을 식별합니다.</li>
        <li>자산 제거가 아키텍처에 미치는 영향을 평가하고 겹치는 생성 자산을 통합하여 중복 처리를 제거합니다.</li>
        <li>불필요한 자산의 생성·저장을 중단하도록 애플리케이션을 업데이트합니다.</li>
        <li>Amazon S3 Lifecycle, Amazon Data Lifecycle Manager와 같은 수명 주기 정책을 사용하여 미사용 자산 삭제를 자동화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 Lifecycle Management — 객체 수명 주기 전반에 걸친 관리</li>
        <li>Amazon Data Lifecycle Manager — EBS 스냅샷 및 AMI 생성·보존·삭제 자동화</li>
        <li>AWS Trusted Advisor — 미사용 리소스 식별</li>
        <li>Amazon CloudWatch — 리소스 활용률 모니터링</li>
      </ul>

      <PageNav />
    </article>
  );
}
