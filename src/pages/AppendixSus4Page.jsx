import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Page() {
  return (
    <article className="doc-content">
      <h1>SUS 4 — 데이터를 어떻게 관리합니까?</h1>

      <p>
        데이터 수명 주기를 최적화하고 불필요한 데이터 저장 및 전송을 줄여
        스토리지 에너지 소비를 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp01">SUS04-BP01: 필요한 데이터만 저장</Link></strong><br />
          <span>실제 필요한 데이터만 수집, 저장하여 스토리지 사용량을 최소화합니다. 불필요한 데이터를 정기 삭제합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp02">SUS04-BP02: 수명 주기 정책으로 데이터 냉각</Link></strong><br />
          <span>S3 수명 주기 정책으로 오래된 데이터를 S3 Glacier 등 저전력 스토리지로 자동 이동합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp03">SUS04-BP03: 불필요한 데이터 이동 최소화</Link></strong><br />
          <span>데이터를 처리 위치 가까이 저장하고 불필요한 복제, 전송을 줄여 에너지 소비를 낮춥니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp04">SUS04-BP04: 압축 및 중복 제거 사용</Link></strong><br />
          <span>데이터 압축과 중복 제거로 저장 데이터 양을 줄이고 스토리지 에너지 효율을 높입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp05">SUS04-BP05: 가장 에너지 효율적인 스토리지 계층에 데이터 저장</Link></strong><br />
          <span>액세스 빈도에 맞는 스토리지 계층을 사용하여 에너지 효율을 최대화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp06">SUS04-BP06: 공유 파일 시스템 또는 스토리지로 공통 데이터 접근</Link></strong><br />
          <span>공유 스토리지를 도입하여 데이터 중복을 방지하고 워크로드의 스토리지 리소스 사용량을 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp07">SUS04-BP07: 네트워크를 통한 데이터 이동 최소화</Link></strong><br />
          <span>데이터 근접성 최적화, 효율적인 파일 형식, 엣지 서비스를 활용하여 네트워크 데이터 이동을 줄입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp08">SUS04-BP08: 재생성하기 어려운 데이터만 백업</Link></strong><br />
          <span>비즈니스 가치가 있는 데이터만 선별적으로 백업하여 스토리지 리소스 요구사항을 최소화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
